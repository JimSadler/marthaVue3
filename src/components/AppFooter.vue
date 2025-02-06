<template>
  <div id="footer" class="px-10 py-3 border-t-sm bg-cyan-darken-4">
    <section class="prefooter" >
      <div class="columns">
        <div class="">
          <img alt="Martha Novak Website"  style="width: 2.9%; z-index:1;" src="@/assets/m-logo-circle-fill-about-png-final.png"/>

          <h2 class="title">
            Martha Novak
          </h2>
        </div>
        <div class="column is-full-mobile">
          <!-- eslint-disable -->
          <ul class="social-media">
            <li>
              <a
                href="https://www.facebook.com/RealTalkwithMartha/"
                target="_blank"
                class="btn btn-facebook"
              >
                <!--<font-awesome-icon-->
                <!--  :icon="{ prefix: 'fab', iconName: 'facebook-f' }"-->
                <!--/>-->
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/MarthaBurgess"
                target="_blank"
                class="btn btn-twitter"
              >
                <!--<font-awesome-icon-->
                <!--  :icon="{ prefix: 'fab', iconName: 'twitter' }"-->
                <!--/>-->
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/marthaburgess"
                target="_blank"
                class="btn btn-dribble"
              >
                <!--<font-awesome-icon-->
                <!--  :icon="{ prefix: 'fab', iconName: 'linkedin' }"-->
                <!--/>-->
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCuNL9cW2ASL1a_slcgUKrQw"
                target="_blank"
                class="btn btn-youtube"
              >
                <!--<font-awesome-icon-->
                <!--  :icon="{ prefix: 'fab', iconName: 'youtube' }"-->
                <!--/>-->
              </a>
            </li>
            <li>
              <a
                href="https://www.meetup.com/Thursday-Night-Enlightenment/"
                target="_blank"
                class="btn btn-meetup"
              >
                <!--<font-awesome-icon-->
                <!--  :icon="{ prefix: 'fab', iconName: 'meetup' }"-->
                <!--/>-->
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="footerNav">
        <!-- <li class="footlink">
          <nuxt-link to="/workshops">Workshops</nuxt-link>
        </li>-->
        <!-- <li class="footlink">
          <nuxt-link to="/store">Store</nuxt-link>
        </li>-->
        <li class="footlink">
          <!--<nuxt-link to="/contact">Contact</nuxt-link>-->
        </li>
        <li class="footlink">
          <!--<nuxt-link to="/testimonial">Testimonials</nuxt-link>-->
        </li>
      </ul>
    </section>
    <footer class="site-footer">
      <!--<span>-->
      <!--  {{ $siteConfig.siteName }} &copy; {{ new Date().getFullYear() }} - All-->
      <!--  Rights Reserved-->
      <!--</span>-->
      <span>
        <br />
        <!--<font-awesome-icon icon="cog" spin></font-awesome-icon>-->
        website developed
        by
        <div class="jsLink">
          <a target="_blank" class="animated" href="https://jsdevelopment.tech">
            <!--<img-->
            <!--  id="heart"-->
            <!--  class="jsDevLogo animate__pulse"-->
            <!--  src="~/assets/uploads/jsDevLogo.png"-->
            <!--  alt-->
            <!--/>-->
            J.S. Development
          </a>
        </div>
      </span>
    </footer>
  </div>
  <!--<v-footer height="40" app>-->
  <!--  <a-->
  <!--    v-for="item in items"-->
  <!--    :key="item.title"-->
  <!--    :href="item.href"-->
  <!--    :title="item.title"-->
  <!--    class="d-inline-block mx-2 social-link"-->
  <!--    rel="noopener noreferrer"-->
  <!--    target="_blank"-->
  <!--  >-->
  <!--    <v-icon-->
  <!--      :icon="item.icon"-->
  <!--      :size="item.icon === '$vuetify' ? 24 : 16"-->
  <!--    />-->
  <!--  </a>-->

  <!--  <div-->
  <!--    class="text-caption text-disabled"-->
  <!--    style="position: absolute; right: 16px;"-->
  <!--  >-->
  <!--    &copy; 2016-{{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">Vuetify, LLC</span>-->
  <!--    —-->
  <!--    <a-->
  <!--      class="text-decoration-none on-surface"-->
  <!--      href="https://vuetifyjs.com/about/licensing/"-->
  <!--      rel="noopener noreferrer"-->
  <!--      target="_blank"-->
  <!--    >-->
  <!--      MIT License-->
  <!--    </a>-->
  <!--  </div>-->
  <!--</v-footer>-->
</template>

<script setup>
  const items = [
    {
      title: 'Vuetify Documentation',
      icon: `$vuetify`,
      href: 'https://vuetifyjs.com/',
    },
    {
      title: 'Vuetify Support',
      icon: 'mdi-shield-star-outline',
      href: 'https://support.vuetifyjs.com/',
    },
    {
      title: 'Vuetify X',
      icon: ['M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z'],
      href: 'https://x.com/vuetifyjs',
    },
    {
      title: 'Vuetify GitHub',
      icon: `mdi-github`,
      href: 'https://github.com/vuetifyjs/vuetify',
    },
    {
      title: 'Vuetify Discord',
      icon: ['M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z'],
      href: 'https://community.vuetifyjs.com/',
    },
    {
      title: 'Vuetify Reddit',
      icon: `mdi-reddit`,
      href: 'https://reddit.com/r/vuetifyjs',
    },
  ]
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
