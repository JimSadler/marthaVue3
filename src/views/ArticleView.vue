<script setup>
import {allArticles} from "@/services/articles.constants.js";
import {computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'

const router = useRouter()
const route = useRoute()

const articleData = computed(() => {
  console.log('test', allArticles.find(article => article.id === route.params.id))
  return allArticles.find(article => article.id === route.params.id)
})

</script>
<template>
  <section
    :class="`hero is-large`"
  >
    <img
      :src="articleData.image"
      alt class="hero-bg-img animate__animated animate__fadeIn animate__fast"
      style="opacity: 0.7 !important; "
    />
    <div class="hero-body">
      <div class="container text-center align-center pr-15 mt-10">
        <h1 class="animate__animated animate__fadeInUp text-white mt-5 font-weight-light">
          {{ articleData.title }}
        </h1>
        <div class="subtitle animate__animated animate__fadeInDown animate__delay-1s" style=" position: relative">
          <p class="text-white font-weight-light" style=" position: relative">
            <span class="font-weight-medium">Author:</span> {{ articleData.params.author }}
            <span class="font-weight-medium">Published On:</span> {{ articleData.params.date }}
          </p>
        </div>
        <br/>
      </div>
    </div>
  </section>
  <div class="my-5 mx-3">
    <v-container class="container">
      <v-row v-for="(text,j) in articleData.text" v-if="articleData.id !== 'how-we-came-to-be-what-we-are'"
             :key="j" class="content">
        <v-col class="text-body-1">
          <p class="text-body-1">{{ text }}</p>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col>
          <p v-for="(text,k) in articleData.text" :key="k" class="text-body-1 my-3">{{ text }}</p>
          <p>subset 1:</p>
          <v-list>
            <v-list-item v-for="(item,l) in articleData.subset1" :key="l">
              <p>{{ item }}</p>
            </v-list-item>
          </v-list>
          <p>subset 2:</p>
          <v-list>
            <v-list-item v-for="(item,l) in articleData.subset2" :key="m">
              <p>{{ item }}</p>
            </v-list-item>
          </v-list>
          <p>subset 3:</p>
          <v-list>
            <v-list-item v-for="(item,l) in articleData.subset3" :key="n">
              <p>{{ item }}</p>
            </v-list-item>
          </v-list>
          <p v-for="(text,o) in articleData.text2" :key="0" class="text-body-1 my-3">{{ text }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.subtitle {
  font-size: 1.5rem;
  border-top: 3px solid #07D1B2 !important;
  margin-left: 35%;
  margin-right: 35%;

}

.subtitle-divider {
  width: 50px;
  margin: 0 auto;
}
</style>
