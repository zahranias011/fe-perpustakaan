<script>
import emitter from '@/event-bus';

export default{
  name: 'navbar',
  data(){
    return {
      isLoggedIn: false,
      userName: ''
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
    }
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold text-primary" href="#">
        <img src="/logo.png" alt="Logo" height="50" class="d-inline-block align-text-top me-2"/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link custom-link" aria-current="page">Beranda</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tentangkami" class="nav-link custom-link" aria-current="page">Tentang Kami</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle custom-link" href="#" role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
              Rak Buku
            </a>
            <ul class="dropdown-menu">
              <li><router-link to="/kategori" class="nav-link custom-link" aria-current="page">Kategori</router-link></li>
              <li><router-link to="/favoritpembaca" class="nav-link custom-link" aria-current="page">Favorit Pembaca</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link to="/bukubaru" class="nav-link custom-link" aria-current="page">Buku Baru</router-link></li>
              <li><a href="https://unnurbandung.perpustakaan.co.id/" class="nav-link custom-link" rel="noopener">E-Book</a></li>
            </ul>
          </li>
        </ul>

        <form class="d-flex mx-auto" role="search">
          <input class="form-control me-2" type="search" placeholder="Cari buku..." aria-label="Search">
          <button class="btn btn-outline-primary" type="submit">Cari</button>
        </form>

        <!-- Akun -->
        <div class="ms-3 dropdown">
          <img src="/user.png" width="32" height="32" class="rounded-circle dropdown-toggle" role="button"
               data-bs-toggle="dropdown" alt="Account Icon" style="cursor:pointer" />

          <ul class="dropdown-menu dropdown-menu-end">
            <template v-if="userName">
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
    </div>
  </nav>
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