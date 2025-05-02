<template>
  <div class="book-detail">
    <div class="book-image">
      <img :src="book.imageUrl" alt="Cover Buku" />
    </div>

    <div class="book-info">
      <!-- Judul Buku -->
      <h1 class="book-title">{{ book.title }}</h1>

      <!-- Tombol Aksi -->
      <div class="buttons">
        <button @click="addToCart" class="cart-btn">+ Wishlist</button>
        <button @click="buyNow" class="buy-btn">📥 Pinjam Buku</button>
      </div>

      <!-- Rating -->
      <div class="rating-section">
        <h2>Rating Pengguna 💫</h2>
        <div class="stars">
          <span
            v-for="i in 5"
            :key="i"
            class="star"
            :class="{ filled: i <= Math.floor(rating) }"
            @click="setRating(i)"
          >
            ★
          </span>
        </div>
        <p class="rating-text">Rating: {{ rating }} / 5</p>
      </div>

      <!-- Deskripsi -->
      <div class="description">
        <h2>Deskripsi</h2>
        <p>{{ book.description }}</p>
      </div>

      <!-- Informasi Buku -->
      <div class="info-section">
        <h2>Informasi Buku</h2>
        <ul class="info-grid">
          <li><span>Bahasa</span><span>{{ book.language }}</span></li>
          <li><span>Penerbit</span><span>{{ book.publisher }}</span></li>
          <li><span>Penulis</span><span>{{ book.author }}</span></li>
          <li><span>Tanggal Rilis</span><span>{{ book.releaseDate }}</span></li>
          <li><span>Halaman</span><span>{{ book.pages }} Halaman</span></li>
          <li><span>Format</span><span>{{ book.format }}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: {
        id: 1,
        title: "Advance Aircraft System",
        imageUrl: "/cover_buku/ADVANCE AIRCRAFT SYSTEMS.jpg",
        price: "Pinjam Buku",
        appLink: "https://link.aplikasi.gramedia.digital",
        description: "Advance Aircraft Systems* merupakan sebuah buku yang menyajikan pemahaman secara menyeluruh dan mendalam mengenai beragam sistem canggih dan modern yang diterapkan dalam operasional pesawat udara masa kini. Buku ini tidak hanya membahas aspek teknis dari sistem-sistem tersebut, tetapi juga mengupas prinsip kerja, fungsi, serta integrasi antar sistem yang berkontribusi besar terhadap performa dan keselamatan penerbangan. Dirancang secara khusus sebagai sumber referensi utama, buku ini sangat cocok untuk digunakan oleh pelajar di bidang kedirgantaraan, teknisi penerbangan yang sedang memperdalam keahlian mereka, serta para profesional di industri aviasi yang membutuhkan pemahaman lebih lanjut mengenai teknologi penerbangan terkini. Dengan pendekatan yang sistematis dan bahasa yang mudah dipahami, buku ini memberikan wawasan yang komprehensif mengenai bagaimana teknologi mutakhir mendukung operasional pesawat secara efisien, aman, dan andal, mulai dari sistem avionik, kelistrikan, hidrolik, hingga sistem pendukung lainnya yang memainkan peran vital dalam dunia penerbangan modern.",
        language: "Indonesia",
        publisher: "Keputakaan Populer Grxxamedia",
        author: "Leila S. Chudori",
        releaseDate: "26 Oktober 2017",
        pages: 394,
        format: "PDF",
      },
      rating: 0,  // Set nilai rating awal
      purchaseOption: "satuan",
    };
  },
  methods: {
    setRating(value) {
      if (this.rating === value) {
        this.rating = value - 0; // Mengizinkan setengah nilai jika sama diklik lagi
      } else {
        this.rating = value;
      }
    },
    addToCart() {
      alert("Buku ditambahkan ke wishlist!");
    },
    buyNow() {
      alert("Buku berhasil Dipinjam!");
    },
  },
};
</script>

<style scoped>
.book-detail {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
  padding: 40px;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.book-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding-left: 30px;
}

.book-image img:hover {
  transform: scale(1.02);
  transition: 0.3s ease;
}

.book-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
}

.buttons {
  margin-bottom: 30px;
}

.cart-btn,
.buy-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
}

.cart-btn {
  background-color: #f0f0f0;
  color: #333;
  margin-right: 12px;
}

.cart-btn:hover {
  background-color: #e0e0e0;
}

.buy-btn {
  background-color: #1976d2;
  color: white;
}

.buy-btn:hover {
  background-color: #1565c0;
}

.rating-section {
  margin-bottom: 30px;
}

.stars {
  display: flex;
}

.star {
  font-size: 24px;
  color: #f0f0f0;
  cursor: pointer;
  transition: 0.2s;
}

.star.filled {
  color: #ffd700; /* Warna bintang yang sudah diisi */
}

.star:hover {
  transform: scale(1.2);
}

.rating-text {
  font-size: 16px;
  font-weight: 500;
  color: #444;
}

.description h2,
.info-section h2 {
  font-size: 18px;
  font-weight: 600;
  color: #444;
  border-bottom: 2px solid #eee;
  padding-bottom: 6px;
  justify-content: baseline;
}

.description p {
  line-height: 1.6;
  font-size: 15px;
}

.info-section ul {
  list-style: none;
  padding: 0;
}

.info-section li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  font-size: 15px;
}

.info-section li span:first-child {
  font-weight: 500;
  color: #666;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 44px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-grid li {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 6px 0;
  font-size: 15px;
}

.info-grid li span:first-child {
  color: #555;
  font-weight: 500;
}

.book-info > div {
  margin-bottom: 30px;
}
</style>