<script setup>
const props = defineProps({
  book: Object
});
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
        </v-col>
      </v-row>

    </v-container>
	</div>
</template>

<style lang="scss" scoped>

</style>
