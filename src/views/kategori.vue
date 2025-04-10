<template>
    <div class="kategori-container">
      <div class="kategori-card" v-for="(item, index) in displayedItems" :key="index">
        <img :src="item.icon" class="icon" alt="icon" />
        <p class="label">{{ item.label }}</p>
      </div>
      <button class="lainnya-btn" @click="showModal = true" v-if="items.length > 6">Lainnya</button>
    </div>
  
    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-box">
        <h2 class="judul-modal">Pilih kategori yang menarik bagi kamu yaa</h2>
        <div class="kategori-grid">
          <div class="kategori-card" v-for="(item, index) in items" :key="index">
            <img :src="item.icon" class="icon" />
            <p class="label">{{ item.label }}</p>
          </div>
        </div>
        <button class="close-btn" @click="closeModal">Tutup</button>
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
          { icon: "/icons/fiksi.png", label: "Fiksi" },
          { icon: "/icons/nonfiksi.png", label: "Non-Fiksi" },
          { icon: "/icons/sastra.png", label: "Kesusastraan" },
          { icon: "/icons/sosial.png", label: "Ilmu-ilmu Sosial" },
          { icon: "/icons/terapan.png", label: "Ilmu-ilmu Terapan" },
          { icon: "/icons/kesenian.png", label: "Kesenian, Hiburan, dan Olahraga" },
          { icon: "/icons/murni.png", label: "Ilmu-ilmu Murni" },
          { icon: "/icons/karya.png", label: "Karya Umum" },
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
  .kategori-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    padding: 20px;
    background: #f9fbfd;
  }
  
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
  }
  
  .kategori-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  }
  
  .icon {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  
  .label {
    font-size: 14px;
    color: #374151;
    text-align: center;
  }

  .modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-box {
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 700px;
  border-radius: 12px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease;
}

.judul-modal {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
}

.kategori-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
}

.kategori-card {
  text-align: center;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.kategori-card:hover {
  background-color: #f5f5f5;
  transform: translateY(-4px);
}

.icon {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}

.label {
  font-size: 14px;
  font-weight: 500;
}

.close-btn {
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.close-btn:hover {
  background-color: #0056b3;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.lainnya-btn {
  background-color: #10b981;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;
}

.lainnya-btn:hover {
  background-color: #059669;
}

.modal-box {
  transition: all 0.3s ease;
  animation: scaleFade 0.3s ease-out;
}

@keyframes scaleFade {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>  