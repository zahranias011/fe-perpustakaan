<template>
  <div class="kategori-wrapper">
    <div class="kategori-container">
      <h2 class="judul-kategori">
        Pilih kategori buku yang kamu mau baca yaak (✿◡‿◡) 
      </h2>

      <div
        v-for="(item, index) in displayedItems"
        :key="index"
        class="kategori-card"
        >
        <!-- Link untuk kategori -->
        <router-link :to="'/kategori/' + item.label.toLowerCase()">
          <img :src="item.icon" class="icon" alt="icon" />
          <p class="label">{{ item.label }}</p>
        </router-link>
      </div>

      <div
        class="kategori-card lainnya"
        v-if="items.length > 6"
        @click="showModal = true"
      >
        <p class="label">Lainnya</p>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-box">
        <button class="close-icon" @click="closeModal">×</button>
        <div class="kategori-grid">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="kategori-card"
          >
            <!-- Link untuk kategori -->
            <router-link :to="'/kategori/' + item.label.toLowerCase()">
              <img :src="item.icon" class="icon" alt="icon" />
              <p class="label">{{ item.label }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Kategori",
  data() {
    return {
      showModal: false,
      items: [
        { icon: "/icons/fiksi.png", label: "Informatika" },
        { icon: "/icons/nonfiksi.png", label: "Penerbangan" },
        { icon: "/icons/sastra.png", label: "Teknik Industri" },
        { icon: "/icons/sosial.png", label: "Elektro" },
        { icon: "/icons/terapan.png", label: "Akutansi" },
        { icon: "/icons/kesenian.png", label: "Manajemen" },
        { icon: "/icons/murni.png", label: "Administrasi Negara" },
        { icon: "/icons/karya.png", label: "Administrasi Bisnis" },
        { icon: "/icons/agama.png", label: "Agama" },
        { icon: "/icons/filsafat.png", label: "Filsafat" },
        { icon: "/icons/bahasa.png", label: "Bahasa" },
        { icon: "/icons/geografi.png", label: "Geografi dan Sejarah" },
      ],
    };
  },
  computed: {
    displayedItems() {
      return this.items.slice(0, 6);
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handleEsc);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleEsc);
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    handleEsc(e) {
      if (e.key === "Escape") {
        this.closeModal();
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

/* Wrapper buat background full */
.kategori-wrapper {
  min-height: 100vh;
  width: 100%;
  background-image: url('/beranda5.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 200px;
}

/* Container tengah */
.kategori-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

/* Judul */
.judul-kategori {
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  text-shadow: 1px 1px 3px rgba(41, 48, 41, 0.2);
}

/* Kartu */
.kategori-card {
  width: 150px;
  height: 150px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
  text-align: center;
}

.kategori-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
}

.icon {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}

.label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  text-align: center;
}

/* Kartu "Lainnya" */
.kategori-card.lainnya {
  background: linear-gradient(135deg, #3ec7c5, #669fd9);
  color: white;
}

.kategori-card.lainnya:hover {
  background: linear-gradient(135deg, #309fa3, #4f86c2);
}

.kategori-card.lainnya .label {
  color: white;
  font-weight: 600;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
  z-index: 999;
}

.modal-box {
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 800px;
  border-radius: 12px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: scaleFade 0.3s ease-out;
  position: relative;
}

.kategori-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 20px;
  justify-items: center;
}

/* Tombol Tutup */
.close-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  color: #6b7280;
  z-index: 10;
  transition: color 0.2s ease;
}

.close-icon:hover {
  color: #e57373;
}

/* Animasi */
@keyframes scaleFade {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Menghilangkan underline pada router-link dan tag a */
router-link {
  text-decoration: none !important; /* Menghapus underline pada router-link */
}

router-link a {
  text-decoration: none !important; /* Menghapus underline pada tag <a> dalam router-link */
  color: inherit !important;        /* Menggunakan warna teks yang sama */
  cursor: pointer; /* Menjaga pointer cursor seperti biasa */
}

.kategori-card a {
  text-decoration: none !important; /* Menghapus underline di dalam kartu kategori */
  color: inherit !important;        /* Menggunakan warna teks yang sama */
}
</style>