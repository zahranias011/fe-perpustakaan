import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import * as bootstrap from 'bootstrap';
import router from './router';
window.bootstrap = bootstrap;

createApp(App)
  .use(router)
  .mount('#app');
