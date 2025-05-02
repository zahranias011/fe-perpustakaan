import { createRouter, createWebHistory } from 'vue-router';
import signin from '../views/signin.vue';
import register from '../views/register.vue';
import beranda from '../views/beranda.vue';
import tentangkami from '../views/tentangkami.vue';
import Kategori from '../views/kategori.vue';
import bukufiksi from '../views/bukufiksi.vue';
import detailbuku from '../views/detailbuku.vue';
import Bukukategori from '../views/bukukategori.vue';
import hasilpencarian from '../views/hasilpencarian.vue';

const routes = [
  { path: '/signin', name: 'SignIn', component: signin },
  { path: '/register', name: 'Register', component: register },
  { path: '/', name: 'Beranda', component: beranda},
  { path: '/tentangkami', name: 'TentangKami', component: tentangkami},
  { path: '/kategori', name: 'kategori', component: Kategori},
  { path: '/bukufiksi', name: 'bukufiksi', component: bukufiksi},

  // Rute dinamis untuk kategori
  {
    path: '/kategori/:kategori', 
    name: 'BukuKategori',
    component: Bukukategori,
    props: true, // Menyediakan parameter kategori ke komponen
  },

  {
    path: '/hasilpencarian',
    name: 'hasilpencarian',
    component: hasilpencarian,
    props: route => ({ keyword: route.query.keyword })  // Menggunakan keyword sebagai query parameter
  },  
  
  { 
    path: '/detailbuku/:id', 
    name: 'DetailBuku', 
    component: detailbuku,
    props: true, // Menyediakan parameter id ke komponen
  },
  
  
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;
