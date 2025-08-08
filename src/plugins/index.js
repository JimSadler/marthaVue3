/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify';
import router from '@/router';
import { SFacebook, SInstaPaper, STwitter } from 'vue-socials';
import Vue3SocialSharingPlugin from 'vue3-social-sharing';

export function registerPlugins(app) {
  app.use(router);
  app.use(vuetify);
  app.use(Vue3SocialSharingPlugin);

  app.component('s-facebook', SFacebook);
  app.component('s-instagram', SInstaPaper);
  app.component('s-twitter', STwitter);


}
