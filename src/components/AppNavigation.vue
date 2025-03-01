<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function dynamicToRoute(name) {
  console.log('dynamicToRoute', name);
  router.push({ name: name });
}

const active = computed(() => {
  return `active-${router.currentRoute.value.name}`;
});
const drawer = ref(null);
</script>
<template>
  <div>
    <div class="ml-3 px-1 position-fixed animate__animated animate__backInDown"
         style="z-index:1005 !important">
      <a
        ref="img"
        aria-label="Martha Novak Website"
        class="nav-bar-nci-logo"
        href="/"
        tabindex="0"
        target="_blank"
      >
        <img alt="Martha Novak Website" class='marthalogo ml-5 mr-5 mt-1 d-inline-block'
             src="@/assets/marthaM_color2.png"
             style="width: 55.9%;" />
      </a>
    </div>
    <v-app-bar
      class="app-nav-bar"
      elevation="2"
      order="0"
    >
      <!--<div class="ml-3 px-1 animate__animated animate__backInDown"-->
      <!--     style="z-index:1005 !important">-->
      <!--  <a-->
      <!--    ref="img"-->
      <!--    aria-label="Martha Novak Website"-->
      <!--    class="nav-bar-nci-logo"-->
      <!--    href="/"-->
      <!--    tabindex="0"-->
      <!--    target="_blank"-->
      <!--  >-->
      <!--    <img alt="Martha Novak Website" class='marthalogo ml-5 mr-5 mt-1 d-inline-block'-->
      <!--         src="@/assets/marthaM_color2.png"-->
      <!--         style="width: 35.9%;" />-->
      <!--  </a>-->
      <!--</div>-->
      <v-spacer></v-spacer>
      <nav aria-label="Main">
        <v-list class="d-flex px-5" style="list-style-type: none;">
          <v-list-item :class="active" class="mx-2">
            <v-btn color="grey-darken-4" exact to="/">
              <v-icon color="grey-darken-4">mdi-home</v-icon>
              Home
            </v-btn>

          </v-list-item>
          <v-list-item :class="active" class="mx-2">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  append-icon="mdi-chevron-down"
                  color="grey-darken-4"
                  exact
                  v-bind="props"
                >
                  About
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-btn color="grey-darken-4" exact to="/our-people" variant="text">
                    <v-list-item-title>Our People</v-list-item-title>
                  </v-btn>
                </v-list-item>
                <v-list-item>
                  <v-btn color="grey-darken-4" exact to="what-we-do" variant="text">
                    <v-list-item-title>What We Do</v-list-item-title>
                  </v-btn>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
          <v-list-item>
            <v-btn color="grey-darken-4" exact to="/books">
              <v-list-item-title>Books</v-list-item-title>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn color="grey-darken-4" exact to="/articles">
              <v-list-item-title>Articles</v-list-item-title>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn color="grey-darken-4" exact to="/store">
              <v-list-item-title>Store</v-list-item-title>
            </v-btn>
          </v-list-item>
          <!--<v-list-item>-->
          <!--  <v-btn to="/contact" exact color="grey-darken-4">-->
          <!--    <v-list-item-title>Contact</v-list-item-title>-->
          <!--  </v-btn>-->
          <!--</v-list-item>-->
        </v-list>
      </nav>
    </v-app-bar>
  </div>
</template>

<style lang="scss" scoped>
//.active-home,.active-about {
//  background-color: #8db0b3 !important;
//}
//img.marthalogo {
//  -webkit-filter: invert(1);
//  filter: invert(1);
//}
</style>
