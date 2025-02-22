<script setup>
import { ref, computed} from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
function dynamicToRoute(name) {
  console.log('dynamicToRoute',name)
  router.push({name:name})
}
const active = computed(() => {
  return `active-${router.currentRoute.value.name}`
})
const drawer = ref(null)
</script>
<template>
  <div>
    <div class="ml-3 px-1 position-fixed animate__animated animate__backInDown" style="z-index:1005 !important">
      <a
        class="nav-bar-nci-logo"
        ref="img"
        tabindex="0"
        href="/"
        target="_blank"
        aria-label="Martha Novak Website"
      >
        <img alt="Martha Novak Website" class='ml-5 mr-5 mt-1 d-inline-block' style="width: 37.9%;"
             src="@/assets/m-logo-circle-fill-about-png-final.png"/>
      </a>
    </div>
    <v-app-bar
      elevation="2"
      order="0"
      class="app-nav-bar"
    >
      <v-spacer></v-spacer>
      <nav aria-label="Main">
        <v-list class="d-flex px-5" style="list-style-type: none;">
          <v-list-item :class="active" class="mx-2">
            <v-btn to="/" exact color="grey-darken-4">
              <v-icon color="grey-darken-4">mdi-home</v-icon>
              Home
            </v-btn>

          </v-list-item>
          <v-list-item :class="active" class="mx-2">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  color="grey-darken-4"
                  v-bind="props"
                  append-icon="mdi-chevron-down"
                  exact
                >
                  About
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-btn to="/our-people" color="grey-darken-4" variant="text" exact>
                    <v-list-item-title>Our People</v-list-item-title>
                  </v-btn>
                </v-list-item>
                <v-list-item>
                  <v-btn to="what-we-do" exact color="grey-darken-4" variant="text">
                    <v-list-item-title>What We Do</v-list-item-title>
                  </v-btn>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
          <v-list-item>
            <v-btn to="/books" color="grey-darken-4" exact>
              <v-list-item-title>Books</v-list-item-title>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn to="/articles" exact color="grey-darken-4">
              <v-list-item-title>Articles</v-list-item-title>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn to="/store" exact color="grey-darken-4">
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
</style>
