import './assets/reset.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createNaverMap } from 'vue3-naver-maps';

import App from './App.vue';
// import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(createNaverMap, {
  clientId: 'wodnrdl91',
  category: 'ncp'
});
// app.use(router);

app.mount('#app');
