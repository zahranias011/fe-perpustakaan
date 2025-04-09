<template>
  <div class="container" :class="{show: visble}">
    <div class="about-card">
      <h1 class="main-title">Tentang Kami</h1>

      <section>
        <h2 class="section-title">📚 Perpustakaan Digital UNNUR</h2>
        <p class="text">
          Perpustakaan Universitas Nurtanio Bandung hadir sebagai pusat informasi akademik berbasis digital,
          mendukung kegiatan belajar dan riset mahasiswa serta dosen.
        </p>
      </section>

      <section>
        <h2 class="section-title">🎯 Visi</h2>
        <p class="text">
          “Menjadi perpustakaan berkualitas dan dapat menyajikan informasi terbaik untuk meningkatkan kecerdasan dan keterampilan,mahasiswa serta berbudi pekerti luhur mempertebal semangat kebangsaan dan cinta tanah air sehingga dapat menumbuhkan rasa sebagai manusia pembangunan yang dapat membangun diri sendiri dan bertanggung jawab atas pembangunan Bangsa berdasarkan Pancasila dan UUD 1945 guna mendukung Perpustakaan Universitas Nurtanio yang lebih baik”
        </p>
      </section>

      <section>
        <h2 class="section-title">🌱 Misi</h2>
        <ul class="mission-list">
          <li>Memberikan pelayanan terbaik kepada pemustaka atau mahasiswa.</li>
          <li>Menyajikan  informasi dan informasi ilmiah yang terbaru dan terbaik dalam berbagai bentuk tercetak, maupun  elektronik.</li>
          <li>Mengembangkan kemampuan untuk mencari, dan memanfaatkan informasi.</li>
          <li>Mendidik mahasiswa agar dapat memelihara dan memanfaatkan bahan pustaka secara tepat dan berhasil guna.</li>
        </ul>
      </section>

      <section>
        <h2 class="section-title">👥 Tim Kami</h2>
        <p class="text">
          Kami terdiri dari pustakawan profesional, pengembang sistem informasi, serta relawan literasi
          yang berkomitmen memberikan layanan terbaik bagi civitas akademika UNNUR.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: #f9fafb;
  padding: 50px 20px;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

.about-card {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.main-title {
  text-align: center;
  font-size: 36px;
  color: #1d4ed8;
  margin-bottom: 30px;
}

.section-title {
  font-size: 24px;
  color: #111827;
  margin-bottom: 10px;
  margin-top: 30px;
}

.text {
  font-size: 16px;
  color: #4b5563;
  line-height: 1.7;
}

.mission-list {
  padding-left: 20px;
  color: #4b5563;
  font-size: 16px;
  line-height: 1.7;
}

.mission-list li {
  margin-bottom: 8px;
}
</style>

<script>
export default {
  name: "TentangKami",
};
</script>
