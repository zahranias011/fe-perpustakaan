<script>
import emitter from '@/event-bus';

export default{
  name: 'navbar',
  data(){
    return {
      isLoggedIn: false,
      userName: '',
      isSidebarOpen: false
    };
  },
  mounted() {
    // Cek apakah user sudah login
    const user = localStorage.getItem('userName');
    if (user) {
      this.isLoggedIn = true;
      this.userName = user;
    }

    // Dengarkan event login dari halaman login
    emitter.on('user-logged-in', (name) => {
      this.isLoggedIn = true;
      this.userName = name;
    });

    // Dengarkan event logout (kalau kamu pakai emit juga saat logout)
    emitter.on('user-logged-out', () => {
      this.isLoggedIn = false;
      this.userName = '';
    });
  },
  methods: {
    logout() {
      localStorage.removeItem('userName');
      this.isLoggedIn = false;
      this.userName = '';
      emitter.emit('user-logged-out'); // ← emit event logout
      this.$router.push('/signin');
      this.isSidebarOpen = false;
    }
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    }
  }
};
</script>

<template>
  <nav class="navbar fixed-top custom-navbar d-flex justify-content-between align-items-center px-3">
    <div class="d-flex align-items-center">
      <img src="/logo.png" alt="Logo" height="50" class="me-2" />
      <router-link to="/" class="navbar-brand fw-bold text-primary">Perpus Nurtanio</router-link>
    </div>

    <!-- Tombol hamburger (muncul hanya di mobile) -->
    <button class="navbar-togler" type="button" @click="toggleSidebar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Menu desktop -->
    <div class="d-none d-lg-flex align-items-center">
      <ul class="navbar-nav flex-row gap-4 mb-0">
        <li class="nav-item"><router-link to="/" class="nav-link custom-link">Beranda</router-link></li>
        <li class="nav-item"><router-link to="/tentangkami" class="nav-link custom-link">Tentang Kami</router-link></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle custom-link" href="#" data-bs-toggle="dropdown">Rak Buku</a>
          <ul class="dropdown-menu">
            <li><router-link to="/kategori" class="dropdown-item">Kategori</router-link></li>
            <li><router-link to="/favoritpembaca" class="dropdown-item">Favorit Pembaca</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link to="/bukubaru" class="dropdown-item">Buku Baru</router-link></li>
            <li><a href="https://unnurbandung.perpustakaan.co.id/" class="dropdown-item">E-Book</a></li>
          </ul>
        </li>
      </ul>

      <form class="d-flex mx-3" role="search">
        <input class="form-control me-2" type="search" placeholder="Cari buku..." />
        <button class="btn btn-outline-primary" type="submit">Cari</button>
      </form>

      <!-- Akun Desktop -->
      <div class="dropdown ms-3">
        <img src="/user.png" width="32" height="32" class="rounded-circle dropdown-toggle" role="button"
             data-bs-toggle="dropdown" alt="Account Icon" style="cursor:pointer" />
        <ul class="dropdown-menu dropdown-menu-end">
          <template v-if="isLoggedIn">
            <li><h6 class="dropdown-header">Halo, {{ userName }}</h6></li>
            <li><router-link class="dropdown-item" to="/bookmark">Bookmark</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><button class="dropdown-item" @click="logout">Logout</button></li>
          </template>
          <template v-else>
            <li><router-link class="dropdown-item" to="/signin">Login</router-link></li>
          </template>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Overlay -->
  <div v-if="isSidebarOpen" class="sidebar-overlay" @click="closeSidebar"></div>

  <!-- Sidebar untuk mobile -->
  <div :class="['mobile-sidebar', { open: showSidebar }]">
    <div class="sidebar-content">
      <button class="btn btn-close mb-4" @click="toggleSidebar"></button>
      <router-link to="/" class="nav-link" @click="toggleSidebar">Beranda</router-link>
      <router-link to="/tentangkami" class="nav-link" @click="toggleSidebar">Tentang Kami</router-link>
      <router-link to="/kategori" class="nav-link" @click="toggleSidebar">Kategori</router-link>
      <router-link to="/favoritpembaca" class="nav-link" @click="toggleSidebar">Favorit Pembaca</router-link>
      <router-link to="/bukubaru" class="nav-link" @click="toggleSidebar">Buku Baru</router-link>
      <a href="https://unnurbandung.perpustakaan.co.id/" class="nav-link" @click="toggleSidebar">E-Book</a>
      <hr />
      <div v-if="isLoggedIn">
        <p>Halo, {{ userName }}</p>
        <router-link to="/bookmark" class="nav-link" @click="toggleSidebar">Bookmark</router-link>
        <button class="btn btn-danger mt-2" @click="logout">Logout</button>
      </div>
      <div v-else>
        <router-link to="/signin" class="btn btn-primary mt-2" @click="toggleSidebar">Login</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.custom-navbar {
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  font-family: 'Poppins', sans-serif;
  padding: 12px 24px;
}

.navbar-brand {
  font-size: 1.3rem;
}

.custom-link {
  font-weight: 500;
  font-size: 1rem;
  color: #333 !important;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.custom-link::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #007bff;
  bottom: -3px;
  left: 0;
  transition: 0.3s;
}

.custom-link:hover::after {
  width: 100%;
}

.custom-link:hover {
  color: #007bff !important;
}
</style>
