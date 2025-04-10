<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Banner -->
    <div class="relative w-full h-[400px]">
      <img src="/bannerweb.png" class="object-cover w-full h-full max-w-full h-auto" />
      <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 class="text-4xl md:text-5xl font-bold drop-shadow-lg">Perpustakaan Universitas Nurtanio</h1>
        <p class="text-lg mt-2">Bandung</p>
      </div>
    </div>

    <!-- Sambutan -->
    <div class="max-w-6xl mx-auto py-12 px-4 text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Selamat Datang</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Temukan koleksi buku terbaik, sumber literatur digital, dan berbagai layanan perpustakaan kampus kami. Akses mudah, cepat, dan lengkap untuk menunjang kebutuhan akademikmu.
      </p>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <!-- Info Kampus -->
        <div class="footer-section logo-area">
          <img src="/logo.png" alt="Logo UNNUR" class="footer-logo" />
          <p>Jl. Pajajaran No. 219 Bandung<br />Jawa Barat<br />Indonesia</p>
          <p><strong>(022)</strong> 6034484</p>
          <p><a href="mailto:perpusunnurbdg@unnur.ac.id">perpusunnurbdg@unnur.ac.id</a></p>
          <hr class="footer-line" />
          <h4>Jam Buka</h4>
          <p><strong>Senin – Jum’at :</strong><br />BUKA : 08.00<br />Istirahat : 12.00 – 13.00<br />TUTUP : 16.00</p>
        </div>

        <!-- Fakultas -->
        <div class="footer-section">
          <h4>Fakultas</h4>
          <hr class="footer-line" />
          <ul>
            <li>FISIP</li>
            <li>FT</li>
            <li>FE</li>
            <li>FIKI</li>
            <li>Sekolah Pascasarjana</li>
          </ul>
        </div>

        <!-- Unit -->
        <div class="footer-section">
          <h4>Unit</h4>
          <hr class="footer-line" />
          <ul>
            <li>Biro AAK</li>
            <li>Biro AUK</li>
            <li>APSI</li>
            <li>LPPM</li>
            <li>LP3M</li>
            <li>SPI</li>
            <li>UPT PERPUSTAKAAN</li>
            <li>UPT TI & PDDIKTI</li>
            <li>UPT BAHASA</li>
            <li>UPT INKUBATOR BISNIS</li>
            <li>UPT PUSYAN</li>
          </ul>
        </div>

        <!-- Layanan -->
        <div class="footer-section">
          <h4>Layanan</h4>
          <hr class="footer-line" />
          <ul>
            <li>SIAKAD</li>
            <li>Jurnal UNNUR</li>
            <li>Email UNNUR</li>
            <li>E-Learning</li>
            <li>E-Library</li>
            <li>Cloud Storage</li>
            <li>Repository UNNUR</li>
            <li>Blog UNNUR</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HalamanBeranda",
};
</script>

<style>
/* Footer */
.footer {
  background-color: #26304b;
  color: #cbd5e1;
  padding: 70px 40px;
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  font-size: 16px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 50px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  width: 250px;
  height: auto;
  margin-bottom: 18px;
  display: block;
}

.footer-section.logo-area {
  align-items: flex-start;
  justify-content: flex-start;
}

.footer-section h4 {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
}

.footer-line {
  width: 50px;
  height: 2px;
  background-color: #22c55e;
  margin: 10px 0 20px 0;
  border: none;
}

.footer-section p,
.footer-section li,
.footer-section a {
  font-size: 16px;
  color: #cbd5e1;
  line-height: 1.8;
}

.footer-section a {
  color: #38bdf8;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-section a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.footer-section ul li:hover {
  color: #ffffff;
  cursor: pointer;
}

@media (max-width: 768px) {
  .footer {
    padding: 50px 25px;
  }

  .footer-logo {
    width: 100px;
  }
  .footer-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>