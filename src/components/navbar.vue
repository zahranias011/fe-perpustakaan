<template>
  <nav class="navbar navbar-expand-lg sticky-top custom-navbar">
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold text-primary" to="/">
        <img src="/logo.png" alt="Logo" height="50" class="d-inline-block align-text-top me-2" />
      </router-link>

      <!-- Toggle button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Desktop Menu -->
      <div class="collapse navbar-collapse d-none d-lg-flex" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link custom-link" :class="{ active: $route.path === '/' }" aria-current="page">Beranda</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tentangkami" class="nav-link custom-link" :class="{ active: $route.path === '/tentangkami' }">Tentang Kami</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle custom-link" href="#" role="button" data-bs-toggle="dropdown">
              Rak Buku
            </a>
            <ul class="dropdown-menu">
              <li><router-link to="/kategori" class="dropdown-item" :class="{ active: $route.path === '/kategori' }">Kategori</router-link></li>
              <li><router-link to="/favoritpembaca" class="dropdown-item" :class="{ active: $route.path === '/favoritpembaca' }">Favorit Pembaca</router-link></li>
              <li><hr class="dropdown-divider" /></li>
              <li><router-link to="/bukubaru" class="dropdown-item" :class="{ active: $route.path === '/bukubaru' }">Buku Baru</router-link></li>
              <li><a href="https://unnurbandung.perpustakaan.co.id/" class="dropdown-item" target="_blank">E-Book</a></li>
            </ul>
          </li>
        </ul>

        <form class="d-flex mx-auto" role="search" @submit.prevent="searchBuku">
          <input v-model="keyword" class="form-control me-2" type="search" placeholder="Cari buku..." aria-label="Search" />
          <button class="btn btn-outline-primary" type="submit">Cari</button>
        </form>

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

      <!-- Offcanvas Menu Mobile -->
      <div class="offcanvas offcanvas-start d-lg-none" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <!-- Akun (Mobile) -->
        <div class="dropdown my-3">
            <a class="d-flex align-items-center dropdown-toggle text-decoration-none" href="#" role="button"
              data-bs-toggle="dropdown">
              <img src="/user.png" width="28" height="28" class="rounded-circle me-2" alt="Account Icon" />
              <span v-if="userName">Halo, {{ userName }}</span>
              <span v-else>Login</span>
            </a>
            <ul class="dropdown-menu">
              <template v-if="userName">
                <li><router-link class="dropdown-item" to="/bookmark" @click="closeOffcanvas">Bookmark</router-link></li>
                <li><hr class="dropdown-divider"></li>
                <li><button class="dropdown-item" @click="logout">Logout</button></li>
              </template>
              <template v-else>
                <li><router-link class="dropdown-item" to="/signin" @click="closeOffcanvas">Login</router-link></li>
              </template>
            </ul>
        </div>

        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link to="/" class="nav-link" @click="closeOffcanvas">Beranda</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/tentangkami" class="nav-link" @click="closeOffcanvas">Tentang Kami</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownMenu" role="button" data-bs-toggle="dropdown">
                Rak Buku
              </a>
              <ul class="dropdown-menu">
                <li><router-link to="/kategori" class="dropdown-item" @click="closeOffcanvas">Kategori</router-link></li>
                <li><router-link to="/favoritpembaca" class="dropdown-item" @click="closeOffcanvas">Favorit Pembaca</router-link></li>
                <li><hr class="dropdown-divider" /></li>
                <li><router-link to="/bukubaru" class="dropdown-item" @click="closeOffcanvas">Buku Baru</router-link></li>
                <li><a href="https://unnurbandung.perpustakaan.co.id/" class="dropdown-item" target="_blank">E-Book</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import emitter from '@/event-bus';

export default {
  name: 'Navbar',
  data() {
    return {
      keyword: '',       // hanya pakai 'keyword' untuk pencarian
      isLoggedIn: false,
      userName: ''
    };
  },
  mounted() {
    const user = localStorage.getItem('userName');
    if (user) {
      this.isLoggedIn = true;
      this.userName = user;
    }

    emitter.on('user-logged-in', (name) => {
      this.isLoggedIn = true;
      this.userName = name;
    });

    emitter.on('user-logged-out', () => {
      this.isLoggedIn = false;
      this.userName = '';
    });
  },
  methods: {
    searchBuku() {
      // Arahkan ke halaman hasil pencarian, kirim keyword via query
      if (this.keyword.trim() !== '') {
        this.$router.push({ name: 'hasilpencarian', query: { keyword: this.keyword } });
        this.keyword = '';
      }
    },

    logout() {
      localStorage.removeItem('userName');
      this.isLoggedIn = false;
      this.userName = '';
      emitter.emit('user-logged-out');
      this.$router.push('/signin');
      this.closeOffcanvas();
    },

    closeOffcanvas() {
      const offcanvasEl = document.getElementById('offcanvasNavbar');
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  }
};
</script>]

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.custom-navbar {
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  font-family: 'Poppins', sans-serif;
  padding: 12px 24px;
  z-index: 1030;
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

/* Style tambahan untuk akun */
.dropdown-menu {
  min-width: 180px;
}

.dropdown-item {
  padding: 10px 15px;
}

.ms-3 {
  margin-left: 15px !important;
}

/* Tambahan biar ada underline dan warna beda */
.nav-link.active {
  color: #007bff !important;
  font-weight: 600;
}

.custom-link.active::after {
  width: 100%;
}
.custom-link.active {
  color: #007bff !important;
  font-weight: 600;
}
</style>
