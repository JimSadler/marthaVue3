<script setup>
import { ref} from 'vue';
const items = ref( [
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
],);
const drawer = ref(null)
// const menuItems = [
//   { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/dashboard' },
//   { title: 'Participants', icon: 'mdi-account-group', path: '/participants' },
//   { title: 'Treatment Protocols', icon: 'mdi-file-document', path: '/treatment-protocols' },
//   { title: 'Users', icon: 'mdi-account', path: '/users' },
//   { title: 'Settings', icon: 'mdi-cog', path: '/settings' },
// ];
</script>
<template>
  <v-app-bar
    elevation="3"
    order="-1"
    class="app-nav-bar"
  >
    <div class="ml-3 px-1">
      <a
        class="nav-bar-nci-logo"
        ref="img"
        tabindex="0"
        href="/"
        target="_blank"
        aria-label="National Cancer Institute at the National Institutes of Health"
      >
        <img alt="Martha Novak Website" class='ml-5 mr-5 mt-1 d-inline-block' style="width: 26.9%; z-index:1;" src="@/assets/m-logo-circle-fill-about-png-final.png"/>
      </a>
    </div>

    <!--&lt;!&ndash; title &ndash;&gt;-->
    <!--<router-link to="/" class="nav-bar-title">-->
    <!--    <div  class="mr-0">-->
    <!--      Martha Novak-->
    <!--    </div>-->

    <!--  </div>-->
    <!--</router-link>-->

    <v-spacer></v-spacer>
      <ul class="d-flex px-5" style="list-style-type: none;">
        <li class="mx-2">
          <router-link to="/">
            <v-icon>mdi-home</v-icon>
            Home
          </router-link>
        </li>
        <li class="mx-2">
          <router-link to="/about">
            <v-icon>mdi-account</v-icon>
            About
          </router-link>
        </li>
        <li class="mx-2">
          <router-link to="/about">
            <v-icon>mdi-book</v-icon>
            Books
          </router-link>
        </li>
        <li class="mx-2">
          <router-link to="/about">

            <v-icon>mdi-store</v-icon>
            Store
          </router-link>
        </li>
      </ul>
    <!-- history menu -->
    <!-- <HistoryMenu /> -->

    <!-- error menu -->
    <!-- <error-menu /> -->

    <!-- user menu -->
    <!--<app-user-menu />-->
  </v-app-bar>
  <!--<v-app-bar style="z-index: 100;" class="px-5">-->
  <!--  &lt;!&ndash;<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>&ndash;&gt;-->

  <!--  <v-app-bar-title class="ml-1">-->
  <!--    <img alt class='ml-5 mr-5 d-inline-block' style="width: 1.9%; z-index:1;" src="@/assets/m-logo-circle-fill-about-png-final.png"/>-->

  <!--    <div class="mt-n5 d-inline"> Martha Novak</div>-->
  <!--  </v-app-bar-title>-->
  <!--  <v-list>-->
  <!--    <v-list-item>-->
  <!--      <v-list-item>-->
  <!--        <router-link to="/">-->
  <!--          <v-icon>Home</v-icon>-->
  <!--        </router-link>-->
  <!--      </v-list-item>-->
  <!--      <v-list-item>-->
  <!--        <router-link to="/about">-->
  <!--          <v-icon>About</v-icon>-->
  <!--        </router-link>-->
  <!--      </v-list-item>-->
  <!--      &lt;!&ndash;<v-list-item>&ndash;&gt;-->
  <!--      &lt;!&ndash;  <v-menu>&ndash;&gt;-->
  <!--      &lt;!&ndash;    <template v-slot:activator="{ props }">&ndash;&gt;-->
  <!--      &lt;!&ndash;      <v-btn&ndash;&gt;-->
  <!--      &lt;!&ndash;        color="primary"&ndash;&gt;-->
  <!--      &lt;!&ndash;        v-bind="props"&ndash;&gt;-->
  <!--      &lt;!&ndash;      >&ndash;&gt;-->
  <!--      &lt;!&ndash;        About&ndash;&gt;-->
  <!--      &lt;!&ndash;      </v-btn>&ndash;&gt;-->
  <!--      &lt;!&ndash;    </template>&ndash;&gt;-->
  <!--      &lt;!&ndash;    &lt;!&ndash;<v-list>&ndash;&gt;&ndash;&gt;-->
  <!--      &lt;!&ndash;    &lt;!&ndash;  <v-list-item&ndash;&gt;&ndash;&gt;-->
  <!--      &lt;!&ndash;    &lt;!&ndash;    v-for="(item, index) in items"&ndash;&gt;&ndash;&gt;-->
  <!--      &lt;!&ndash;    &lt;!&ndash;    :key="index"&ndash;&gt;&ndash;&gt;-->
  <!--      &lt;!&ndash;    &lt;!&ndash;    :value="index"&ndash;&gt;&ndash;&gt;-->
  <!--      &lt;!&ndash;    &lt;!&ndash;  >&ndash;&gt;&ndash;&gt;-->
  <!--      &lt;!&ndash;    &lt;!&ndash;    <router-link to="">{{ item.title }}</router-link>&ndash;&gt;&ndash;&gt;-->
  <!--      &lt;!&ndash;    &lt;!&ndash;  </v-list-item>&ndash;&gt;&ndash;&gt;-->
  <!--      &lt;!&ndash;    &lt;!&ndash;</v-list>&ndash;&gt;&ndash;&gt;-->
  <!--      &lt;!&ndash;  </v-menu>&ndash;&gt;-->
  <!--      &lt;!&ndash;  <router-link to="/dashboard">&ndash;&gt;-->
  <!--      &lt;!&ndash;    <v-icon>About</v-icon>&ndash;&gt;-->
  <!--      &lt;!&ndash;  </router-link>&ndash;&gt;-->

  <!--      &lt;!&ndash;</v-list-item>&ndash;&gt;-->
  <!--      <v-list-item>-->
  <!--        <router-link to="/books">-->
  <!--          <v-icon>Books</v-icon>-->
  <!--        </router-link>-->
  <!--      </v-list-item>-->
  <!--      <v-list-item>-->
  <!--        <router-link to="/about">-->
  <!--          <v-icon>Store</v-icon>-->
  <!--        </router-link>-->
  <!--      </v-list-item>-->
  <!--    </v-list-item>-->
  <!--  </v-list>-->
  <!--</v-app-bar>-->

  <!--<v-navigation-drawer-->
  <!--  v-model="drawer"-->
  <!--  temporary-->
  <!--&gt;-->
  <!--  &lt;!&ndash;  &ndash;&gt;-->
  <!--</v-navigation-drawer>-->
</template>

<style lang="scss" scoped>

</style>
