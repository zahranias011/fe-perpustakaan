<script>
import axios from 'axios';
import emitter from '@/event-bus';

export default {
  data() {
    return {
      npm: '',
      password: ''
    };
  },
  methods: {
    async handleLogin() {
      console.log("Login button diklik");

      try {
        const response = await axios.post('http://localhost:8080/auth/login', {
          npm: this.npm,  // Kirim NPM ke backend
          password: this.password
        });

        const userName = response.data.replace('Login sukses! Nama Pengguna: ', '');

        // Simpan nama user di localStorage
        localStorage.setItem('userName', userName);

        // Emit event biar navbar langsung update
        emitter.emit('user-logged-in', userName);

        console.log(response.data);
        alert(response.data); // Tampilkan hasil dari backend

        this.$router.push('/'); // Pindah ke halaman beranda setelah login

      } catch (error) {
        console.error("Login gagal:", error);
        alert("Login gagal! Periksa NPM dan Password.");
      }
    }
  }
};
</script>

<template>
  <div class="login-wrapper">
    <div class="login-card animate__animated animate__fadeInDown">
      <h2 class="text-center mb-1">👋 Welcome Back</h2>
      <p class="text-center text-muted mb-4">Silakan login untuk melanjutkan</p>

      <form @submit.prevent="handleLogin">
        <div class="form-group mb-3">
          <label for="npm">NPM</label>
          <div class="input-icon">
            <i class="fa fa-user"></i>
            <input type="text" id="npm" v-model="npm" required />
          </div>
        </div>

        <div class="form-group mb-4">
          <label for="password">Password</label>
          <div class="input-icon">
            <i class="fa fa-lock"></i>
            <input type="password" id="password" v-model="password" required />
          </div>
        </div>

        <button type="submit" class="btn-login">Login</button>
      </form>

      <p class="text-center mt-4">
        Belum punya akun? <router-link to="/register" class="link-register">Daftar di sini</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.login-wrapper {
  background: url('/buku.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  padding: 20px;
  padding-top: 80px;
}

.login-card {
  position: relative;
  background: #fff;
  padding: 40px;
  width: 100%;
  max-width: 420px;
  border-radius: 20px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(3px);
  overflow: hidden;
  border: 2px solid #fff;
}

h2 {
  font-weight: 600;
  color: #333;
}

.input-icon {
  position: relative;
}

.input-icon i {
  position: absolute;
  top: 12px;
  left: 15px;
  color: #aaa;
}

.input-icon input {
  width: 100%;
  padding: 12px 15px 12px 40px;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition: 0.3s ease;
  font-size: 14px;
}

.input-icon input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

.btn-login {
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 12px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-login:hover {
  background-color: #0056b3;
}

.link-register {
  color: #007bff;
  font-weight: 600;
  text-decoration: none;
}

.link-register:hover {
  text-decoration: underline;
}

.text-muted {
  color: #666;
}

.text-center {
  text-align: center;
}

.mt-4 {
  margin-top: 1.5rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-3 {
  margin-bottom: 1rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}
</style>
