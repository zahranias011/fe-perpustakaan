<template>
  <div class="banner-container">
    <img src="/bannerweb.png" alt="Banner Perpustakaan" class="banner-image" />
    <div class="banner-overlay"></div>
  </div>

  <!-- Sambutan -->
  <div class="welcome-section">
  <div class="max-w-6xl mx-auto py-8 px-4 text-center fade-in">
    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3 heading-shadow tracking-wide welcome-title">
      📖 Selamat Datang di Perpustakaan Nurtanio Bandung 📖
    </h2>
    <div class="underline-line mx-auto mb-3 w-20 h-[3px] bg-blue-600 rounded-full"></div>
    <p class="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mt-1">
      Temukan koleksi buku terbaik, sumber literatur digital, dan berbagai layanan perpustakaan kampus kami. Akses mudah, cepat, dan lengkap untuk menunjang kebutuhan akademikmu.
    </p>
  </div>
</div>





 <!-- Layanan -->
<div class="min-h-screen bg-gradient-to-b from-white to-blue-50 py-10">
  <div class="text-center">
    <h1 class="layanan-title">Layanan Kami</h1>
    <p class="layanan-subtitle">Layanan Pemustaka dan Kunjungan</p>
  </div>

  <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    <div
      v-for="(service, index) in services"
      :key="index"
      class="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition ease-in-out duration-300 hover:-translate-y-1"
    >
      <div class="flex items-center gap-4">
        <div class="bg-blue-100 text-blue-600 rounded-xl p-3">
          <component :is="service.icon" class="w-6 h-6" />
        </div>
        <h2 class="text-lg font-semibold text-blue-900">{{ service.name }}</h2>
      </div>
    </div>
  </div>
</div>


  <!-- Tentang Kami -->
  <div class="tentang-container">
    <div
      v-for="(section, index) in sections"
      :key="index"
      class="tentang-item"
      :class="{ reverse: index % 2 !== 0 }"
    >
      <!-- Gambar -->
      <div class="tentang-img-wrapper">
        <img :src="section.image" alt="Tentang Kami Gambar" />
      </div>

      <!-- Teks -->
      <div class="tentang-text">
        <h3>{{ section.title }}</h3>
        <p>{{ section.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HalamanBeranda",
  data() {
    return {
      services: [],
      sections: [
        {
          image: '/beranda3.jpg',
          title: 'Koleksi Perpustakaan',
          description: 'Temukan berbagai koleksi buku cetak dan digital yang lengkap mulai dari literatur akademik, fiksi, referensi ilmiah, hingga karya ilmiah mahasiswa. Koleksi kami terus diperbarui untuk mendukung kebutuhan belajar dan riset Anda.'
        },
        {
          image: '/beranda6.jpg',
          title: 'Pelayanan Perpustakaan',
          description: 'Perpustakaan kami menyediakan berbagai layanan untuk mendukung kebutuhan akademik dan informasi pemustaka, seperti layanan sirkulasi (peminjaman dan pengembalian), layanan referensi, serta bantuan pencarian informasi oleh pustakawan.'
        },
        {
          image: '/beranda1.jpg',
          title: 'Berita Terkini',
          description: 'Dapatkan informasi terbaru seputar layanan, koleksi, serta berbagai kegiatan yang diselenggarakan oleh perpustakaan. Mulai dari peluncuran koleksi buku terbaru, jadwal kegiatan literasi, hingga pengumuman layanan khusus untuk mahasiswa.'
        },
        {
          image: '/beranda7.jpg',
          title: 'Ruang Baca',
          description: 'Fasilitas ruang baca yang tenang, bersih, dan kondusif untuk mendukung proses belajar dan penelitian Anda. Suasana yang nyaman dan minim gangguan membuat Anda bisa lebih fokus dalam menyelesaikan tugas atau sekadar menikmati waktu membaca.'
        }
      ]
    };
  }
};
</script>

<style scoped>

/* Variasi Selamat Datang */
.welcome-section {
  background: linear-gradient(to bottom, #f0f4ff, #ffffff);
  position: relative;
  overflow: hidden;
  padding-top: 30px; /* tambahkan padding atas */
  padding-bottom: 50px; /* tambahkan padding bawah */
}


.welcome-section h2 {
  margin-top: 2%;
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
  transition: color 0.3s ease;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
}

.welcome-section h2::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  height: 3px;
  background: #007bff;
  border-radius: 4px;
  transition: width 0.4s ease;
}

.welcome-section h2:hover {
  color: #0056b3;
}

.welcome-section h2:hover::after {
  width: 80%;
}

.welcome-section p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  transition: transform 0.3s ease;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


.layanan-title {
  margin-top: 2%;
  font-size: 2.5rem;
  font-weight: 700;
  color: #004a99;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  display: inline-block;
  margin-bottom: 0.5rem;
  animation: fadeInTop 0.8s ease-out both;
  text-shadow: 1px 1px 3px rgba(0, 0, 100, 0.1);
}

.layanan-subtitle {
  font-size: 1.25rem;
  color: #3c6eaf;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  animation: fadeInTop 1s ease-out both;
}

/* Fade In Top Animation */
@keyframes fadeInTop {
  0% {
    opacity: 0;
    transform: translateY(-15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}



/* Fade-in animation */
.fade-in {
  opacity: 0;
  animation: fadeUp 1s ease-out 0.3s forwards;
}

@keyframes fadeUp {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

html, body {
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

.banner-container {
  position: relative;
  width: 100%;
  max-width: 100vw;
  padding-top: calc(450 / 1920 * 100%);
  overflow: hidden;
}

.banner-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

/* Tentang Kami */
.tentang-container {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.tentang-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
}

.tentang-item.reverse {
  flex-direction: row-reverse;
}

.tentang-img-wrapper {
  flex: 1;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tentang-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.tentang-img-wrapper img:hover {
  transform: scale(1.03);
}

.tentang-text {
  flex: 1;
  text-align: left;
}

.tentang-text h3 {
  font-size: 1.5rem;
  color: #0056b3;
  margin-bottom: 0.5rem;
}

.tentang-text p {
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.tentang-text a {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

.tentang-text a:hover {
  text-decoration: underline;
}

/* Responsif */
@media (max-width: 768px) {
  .tentang-item {
    flex-direction: column;
    text-align: center;
  }

  .tentang-text {
    text-align: center;
  }
}

</style>
