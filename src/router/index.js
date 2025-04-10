import { createRouter, createWebHistory } from 'vue-router';
import signin from '../views/signin.vue';
import register from '../views/register.vue';
import beranda from '../views/beranda.vue';
import tentangkami from '../views/tentangkami.vue';
import Kategori from '../views/kategori.vue';

const routes = [
  { path: '/signin', name: 'SignIn', component: signin },
  { path: '/register', name: 'Register', component: register },
  { path: '/', name: 'Beranda', component: beranda},
  { path: '/tentangkami', name: 'TentangKami', component: tentangkami},
  { path: '/kategori', name: 'Kategori', component: Kategori},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;
