<script>
import axios from 'axios';

export default {
  data() {
    return {
      nama: '',
      npm: '',
      password: ''
    };
  },
  methods: {
    async handleRegister() {
      try {
        const response = await axios.post('http://localhost:8080/auth/register', {
          nama: this.nama,
          npm: this.npm,
          password: this.password
        });
        alert(response.data);
        this.$router.push('/signin'); // Redirect ke halaman login
      } catch (error) {
        alert('Registrasi gagal: ' + error.response.data.message || error.response.data || 'Terjadi kesalahan');
      }
    }
  }
}
</script>

<template>
  <div class="register-wrapper">
    <div class="register-card animate_animated animate_fadeInDown">
      <h2 class="text-center mb-2">✨ Buat Akun Baru</h2>
      <p class="text-center text-muted mb-4">Isi datamu untuk mulai menggunakan perpustakaann</p>

      <form @submit.prevent="handleRegister">
        <div class="form-group mb-3">
          <label>Nama</label>
          <div class="input-icon">
            <i class="fa fa-user"></i>
            <input type="text" v-model="nama" required />
          </div>
        </div>

        <div class="form-group mb-3">
          <label>NPM</label>
          <div class="input-icon">
            <i class="fa fa-id-card"></i>
            <input type="text" v-model="npm" required />
          </div>
        </div>

        <div class="form-group mb-4">
          <label>Password</label>
          <div class="input-icon">
            <i class="fa fa-lock"></i>
            <input type="password" v-model="password" required />
          </div>
        </div>

        <button type="submit" class="btn-register">Register</button>
      </form>

      <p class="text-center mt-4">
        Sudah punya akun?
        <router-link to="/signin" class="link-signin">Login di sini</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.register-wrapper {
  background: url('/buku.jpg') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  padding: 20px;
  padding-top: 80px;
}

.register-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 35px 30px;
  width: 100%;
  max-width: 420px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
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
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
  color: #aaa;
}

.input-icon input {
  width: 100%;
  padding: 12px 15px 12px 42px;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.input-icon input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 6px rgba(0, 123, 255, 0.25);
}

.btn-register {
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

.btn-register:hover {
  background-color: #0056b3;
}

.link-signin {
  color: #007bff;
  font-weight: 600;
  text-decoration: none;
}

.link-signin:hover {
  text-decoration: underline;
}
</style>