<template>
    <div class="hasilpencarian">
      <h2>Hasil Pencarian untuk "<span>{{ keyword }}</span>"</h2>
  
      <!-- Menampilkan Loading Spinner -->
      <div v-if="loading" class="loading-spinner">
        <span class="spinner"></span> Sedang memuat...
      </div>
  
      <!-- Menampilkan hasil pencarian jika ada -->
      <div v-if="hasil.length > 0 && !loading" class="grid-container">
        <div v-for="buku in hasil" :key="buku.biblioId" class="card">
          <div class="icon-buku">
            <img v-if="buku.cover" :src="buku.cover" alt="cover" class="cover-img" />
            <span v-else>📘</span>
          </div>
          <div class="judul">{{ buku.title }}</div>
          <button class="btn-aksi">Detail</button>
        </div>
      </div>
  
      <!-- Menampilkan pesan jika tidak ada hasil -->
      <div v-else-if="hasil.length === 0 && !loading" class="no-result">
        <p>😢 Buku dengan kata kunci "<b>{{ keyword }}</b>" tidak ditemukan.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'hasilpencarian',
    data() {
      return {
        hasil: [],
        keyword: '',
        loading: false,
      };
    },
    mounted() {
      this.keyword = this.$route.query.keyword;  // Ambil keyword dari query string
      console.log('Keyword:', this.keyword); // Log untuk memverifikasi apakah keyword sudah benar
      this.cariBuku();
    },
    methods: {                           
        async cariBuku() {
        this.loading = true; // Mulai loading
        const keywordLower = this.keyword.toLowerCase();

        // Mapping kata kunci ke kategori
        const keywordToCategory = {
          'aircraft': 'penerbangan',
          'aviation': 'penerbangan',
          'flight': 'penerbangan',
          'robotics': 'teknik industri',
          'engineering': 'informatika',
          'management': 'manajemen',
          'accounting': 'akutansi',
          'agama': 'agama',
          'filsafat': 'filsafat',
          'bahasa': 'bahasa',
          'geografi': 'geografi dan sejarah',
          // Tambahkan sesuai kebutuhan
        };

        const mappedCategory = keywordToCategory[keywordLower];
        let url = '';

        if (mappedCategory) {
          url = `http://localhost:8080/api/buku/kategori?nama=${encodeURIComponent(mappedCategory)}`;
        } else {
          url = `http://localhost:8080/api/buku/search?keyword=${encodeURIComponent(this.keyword)}`;
        }

        try {
            const response = await fetch(url);
            if (response.ok) {
            const data = await response.json();
            console.log("Data diterima:", data);  // Log data yang diterima
            this.hasil = data;  // Menyimpan hasil pencarian
            } else {
            this.hasil = [];  // Tidak ada hasil
            }
        } catch (error) {
            console.error("Gagal fetch data:", error);
            this.hasil = []; // Tetap kosong jika terjadi error
        } finally {
            this.loading = false;  // Menghentikan loading
        }
        }
    },
    watch: {
        '$route.query.keyword'(newKeyword) {
            this.keyword = newKeyword;
            this.cariBuku(); // Panggil ulang jika keyword berubah
        }
    }
  };
  </script>
  
  <style scoped>
  /* Gaya untuk loading spinner */
  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-size: 1.5rem;
    color: #1d4ed8;
  }
  
  .spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #1d4ed8;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  /* Gaya untuk hasil pencarian */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }
  
  .card {
    background: linear-gradient(to bottom right, #e0f2fe, #fff);
    padding: 1.2rem;
    border-radius: 15px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .icon-buku {
    font-size: 2.5rem;
  }
  
  .judul {
    font-weight: 600;
    font-size: 1rem;
  }
  
  .no-result {
    text-align: center;
    margin-top: 3rem;
    color: #555;
  }
  </style>
  