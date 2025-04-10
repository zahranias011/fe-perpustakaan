<template>
    <div class="container">
      <h1 class="main-title">Tentang Kami ლ(╹◡╹ლ)</h1>
  
      <div class="section-card" v-for="(section, index) in sections" :key="index">
        <h2 class="section-title">{{ section.icon }} {{ section.title }}</h2>
  
        <p v-if="!section.list" class="text">{{ section.text }}</p>
  
        <ul v-else class="mission-list">
          <li v-for="(item, i) in section.list" :key="i">{{ item }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TentangKami",
    data() {
      return {
        sections: [
          {
            icon: "🎯",
            title: "Visi",
            text:
              "Menjadi perpustakaan berkualitas dan dapat menyajikan informasi terbaik untuk meningkatkan kecerdasan dan keterampilan mahasiswa serta berbudi pekerti luhur mempertebal semangat kebangsaan dan cinta tanah air sehingga dapat menumbuhkan rasa sebagai manusia pembangunan yang dapat membangun diri sendiri dan bertanggung jawab atas pembangunan Bangsa berdasarkan Pancasila dan UUD 1945 guna mendukung Perpustakaan Universitas Nurtanio yang lebih baik. ",
          },
          {
            icon: "🌱",
            title: "Misi",
            list: [
              "Memberikan pelayanan terbaik kepada pemustaka atau mahasiswa.",
              "Menyajikan informasi dan informasi ilmiah yang terbaru dan terbaik dalam berbagai bentuk tercetak, maupun elektronik.",
              "Mengembangkan kemampuan untuk mencari, dan memanfaatkan informasi.",
              "Mendidik mahasiswa agar dapat memelihara dan memanfaatkan bahan pustaka secara tepat dan berhasil guna.",
            ],
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap');
  
  .container {
    background: linear-gradient(to bottom right, #f0f4ff, #e0e7ff);
    padding: 80px 20px;
    min-height: 100vh;
    font-family: 'Rubik', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .main-title {
    font-size: 42px;
    color: #1e40af;
    margin-bottom: 50px;
    font-weight: 700;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .section-card {
    background: white;
    width: 100%;
    max-width: 900px;
    padding: 35px 30px;
    margin-bottom: 30px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.07);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-left: 6px solid #1d4ed8;
  }
  
  .section-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.12);
  }
  
  .section-title {
    font-size: 26px;
    color: #1f2937;
    margin-bottom: 15px;
    font-weight: 600;
  }
  
  .text {
    font-size: 17px;
    color: #374151;
    line-height: 1.8;
  }
  
  .mission-list {
    list-style: disc;
    padding-left: 20px;
    color: #374151;
    font-size: 17px;
    line-height: 1.8;
  }
  
  .mission-list li {
    margin-bottom: 10px;
  }
  
  /* Responsif */
  @media (max-width: 768px) {
    .main-title {
      font-size: 32px;
      text-align: center;
    }
  
    .section-card {
      padding: 25px 20px;
    }
  
    .section-title {
      font-size: 22px;
    }
  
    .text,
    .mission-list {
      font-size: 15px;
    }
  }
  </style>
  