/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import 'animate.css';
import { registerPlugins } from '@/plugins';
// import { SFacebook,SInstagram,STwitter } from 'vue-socials';
// Components
import App from './App.vue';
// Composables
import { createApp } from 'vue';

const app = createApp(App);
registerPlugins(app);

app.mount('#app');
