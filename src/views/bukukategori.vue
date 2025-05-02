<template>
    <div class="container">
      <h2 class="judul-kategori">📚 Buku Kategori: {{ kategori.toUpperCase() }}</h2>
  
      <div v-if="filteredBooks.length > 0" class="grid-buku">
        <div class="buku-item" v-for="book in filteredBooks" :key="book.id">
          <router-link :to="`/detailbuku/${book.id}`">
          <img :src="book.cover" :alt="book.title" class="cover-buku" />
          <h3 class="judul-buku">{{ book.title }}</h3>
        </router-link>
        </div>
      </div>
  
      <div v-else class="not-found">
        <p>Tidak ada buku dalam kategori ini.</p>
      </div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'BukuKategori',
    props: ['kategori'],
    data() {
      return {
        books: [
          { id: 1, title: 'ADVANCE AIRCRAFT SYSTEMS', category: 'penerbangan', cover: '/cover_buku/ADVANCE AIRCRAFT SYSTEMS.jpg' },
          { id: 2, title: 'AIRCRAFT CONTROL AND SIMULATION BRIAN L. STEVENS', category: 'penerbangan', cover: '/cover_buku/AIRCRAFT CONTROL AND SIMULATION BRIAN L. STEVENS.jpg' },
          { id: 3, title: 'aircraft electricity & electronics', category: 'penerbangan', cover: '/cover_buku/aircraft electricity & electronics.jpg' },
          { id: 4, title: 'Aircraft Instruments', category: 'penerbangan', cover: '/cover_buku/Aircraft Instruments.jpg' },
          { id: 5, title: 'AIRCRAFT PERFORMANCE', category: 'penerbangan', cover: '/cover_buku/AIRCRAFT PERFORMANCE.jpg' },
          { id: 6, title: 'Aircraft Powerplant', category: 'penerbangan', cover: '/cover_buku/Aircraft Powerplant.jpg' },
          { id: 7, title: 'AIRCRAFT PROPUSION SAEED FAROKHI', category: 'penerbangan', cover: '/cover_buku/AIRCRAFT PROPUSION SAEED FAROKHI.jpg' },
          { id: 8, title: 'AIRCRAFT SYSTEM  MECHANICAL, ELECTRICAL, AND AVIONICS SUBSYSTEMS INTEGRATION', category: 'penerbangan', cover: '/cover_buku/AIRCRAFT SYSTEM  MECHANICAL, ELECTRICAL, AND AVIONICS SUBSYSTEMS INTEGRATION.jpg' },
          { id: 9, title: 'Airplane Aerodynamics And Performance', category: 'penerbangan', cover: '/cover_buku/Airplane Aerodynamics And Performance.jpg' },
          { id: 10,title: 'AIRPORT ENGINEERING', category: 'penerbangan', cover: '/cover_buku/AIRPORT ENGINEERING.jpg' },
          { id: 11,title: 'Akutansi dan perpajakan', category: 'akutansi', cover: '/cover_buku/Akutansi dan perpajakan.jpg' },
          { id: 12,title: 'auditing and assurance services an integrated approach', category: 'akutansi', cover: '/cover_buku/auditing and assurance services an integrated approach.jpg' },
          { id: 13,title: 'Aviation Legislation ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 10 Aviation Legislation', category: 'penerbangan', cover: '/cover_buku/Aviation Legislation ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 10 Aviation Legislation.jpg' },
          { id: 14,title: 'COMPOSITES MANUFACTURING  MATERIALS, PRODUCT, AND PROCESS ENGINEERING', category: 'teknik industri', cover: '/cover_buku/COMPOSITES MANUFACTURING  MATERIALS, PRODUCT, AND PROCESS ENGINEERING.jpg' },
          { id: 15,title: 'Dari Blitas Ke Kelas Dunia  WIWEKO SOEPONO Membangun Penerbangan Indonesia', category: 'penerbangan', cover: '/cover_buku/Dari Blitas Ke Kelas Dunia  WIWEKO SOEPONO Membangun Penerbangan Indonesia.jpg' },
          { id: 16,title: 'DEFENCE & AVIATION CHAPPY HAKIM', category: 'penerbangan', cover: '/cover_buku/DEFENCE & AVIATION CHAPPY HAKIM.jpg' },
          { id: 17,title: 'DESIGN AND DEVELOPMENT OF AIRCRAFT SYSTEM', category: 'penerbangan', cover: '/cover_buku/DESIGN AND DEVELOPMENT OF AIRCRAFT SYSTEM.jpg' },
          { id: 18,title: 'DESIGN FOR AIR COMBAT RAY WHITFORD', category: 'penerbangan', cover: '/cover_buku/DESIGN FOR AIR COMBAT RAY WHITFORD.jpg' },
          { id: 19,title: 'Digital tevh & Electronic inst display ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 5 Digital tevh & Electronic inst display', category: 'penerbangan', cover: '/cover_buku/Digital tevh & Electronic inst display ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 5 Digital tevh & Electronic inst display.jpg' },
          { id: 20,title: 'DYNAMICS OF SMART STRUCTURES', category: 'penerbangan', cover: '/cover_buku/DYNAMICS OF SMART STRUCTURES.jpg' },
          { id: 21,title: 'Electrical Fundamentals  ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 3  Electrical Fundamentals', category: 'penerbangan', cover: '/cover_buku/Electrical Fundamentals  ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 3  Electrical Fundamentals.jpg' },
          { id: 22,title: 'Electronic Fundamentals ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 5 Electronic Fundamentals', category: 'penerbangan', cover: '/cover_buku/Electronic Fundamentals ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 5 Electronic Fundamentals.jpg' },
          { id: 23,title: 'Elements of Propulsion  Gas Turbine and Rocket MATTINGLY, Jack D', category: 'penerbangan', cover: '/cover_buku/Elements of Propulsion  Gas Turbine and Rocket MATTINGLY, Jack D.jpg' },
          { id: 24,title: 'FANS  DESIGN AND OPERATION OF CENTRIFUGAL, AXIAL-FLOW AND CROSS-FLOW FANS', category: 'penerbangan', cover: '/cover_buku/FANS  DESIGN AND OPERATION OF CENTRIFUGAL, AXIAL-FLOW AND CROSS-FLOW FANS.jpg' },
          { id: 25,title: 'FINITE ELEMENT METHODS FOR ENGINEERS FENNER, Roger T.', category: 'informatika', cover: '/cover_buku/FINITE ELEMENT METHODS FOR ENGINEERS FENNER, Roger T..jpg' },
          { id: 26,title: 'Flight Dynamics Principles  a Linear System Approach to Aircraft  Stability and Control', category: 'penerbangan', cover: '/cover_buku/Flight Dynamics Principles  a Linear System Approach to Aircraft  Stability and Control.jpg' },
          { id: 27,title: 'FUNDAMENTAL OF INTERNATIONAL AVIATION SUZANE K KEANS', category: 'penerbangan', cover: '/cover_buku/FUNDAMENTAL OF INTERNATIONAL AVIATION SUZANE K KEANS.jpg' },
          { id: 28,title: 'FUNDAMENTAL OF INTERNATIONAL AVIATIONLAW AND POLICY BENJAMYN SCOTT', category: 'penerbangan', cover: '/cover_buku/FUNDAMENTAL OF INTERNATIONAL AVIATIONLAW AND POLICY BENJAMYN SCOTT.jpg' },
          { id: 29,title: 'Fundamentals of Gas Turbine', category: 'penerbangan', cover: '/cover_buku/Fundamentals of Gas Turbine.jpg' },
          { id: 30,title: 'Gas Turbine Engine (V1) ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 15  Gas Turnine Engine (V1)', category: 'penerbangan', cover: '/cover_buku/Gas Turbine Engine (V1) ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 15  Gas Turnine Engine (V1).jpg' },
          { id: 31,title: 'Gas Turbine Engine (V2) ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 15  Gas Turnine Engine (V2)', category: 'penerbangan', cover: '/cover_buku/Gas Turbine Engine (V2) ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 15  Gas Turnine Engine (V2).jpg' },
          { id: 32,title: 'GROUND INSTRUCTOR RATING CHARLES A. ZWENG', category: 'penerbangan', cover: '/cover_buku/GROUND INSTRUCTOR RATING CHARLES A. ZWENG.jpg' },
          { id: 33,title: 'HELICOPTER FLIGHT DYNAMICS  THE THEORY AND APPLICATION OF FLYING QUALITIES AND SIMULATION MODELING PADFIELD, GERATH D.', category: 'penerbangan', cover: '/cover_buku/HELICOPTER FLIGHT DYNAMICS  THE THEORY AND APPLICATION OF FLYING QUALITIES AND SIMULATION MODELING PADFIELD, GERATH D..jpg' },
          { id: 34,title: 'HELICOPTER', category: 'penerbangan', cover: '/cover_buku/HELICOPTER.jpg' },
          { id: 35,title: 'Human Factor ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 9 Human Factor', category: 'penerbangan', cover: '/cover_buku/Human Factor ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 9 Human Factor.jpg' },
          { id: 36,title: 'img20230207_15062059', category: 'penerbangan', cover: '/cover_buku/img20230207_15062059.jpg' },
          { id: 37,title: 'IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 17  Propeller', category: 'penerbangan', cover: '/cover_buku/IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 17  Propeller.jpg' },
          { id: 38,title: 'kamus belanda indonesia', category: 'bahasa', cover: '/cover_buku/kamus belanda indonesia.jpg' },
          { id: 39,title: 'kamus itali indonesia ed revisi', category: 'bahasa', cover: '/cover_buku/kamus itali indonesia ed revisi.jpg' },
          { id: 40,title: 'kamus itali indonesia', category: 'bahasa', cover: '/cover_buku/kamus itali indonesia.jpg' },
          { id: 41,title: 'kamus rusia indonesia', category: 'bahasa', cover: '/cover_buku/kamus rusia indonesia.jpg' },
          { id: 42,title: 'KAMUS TEKNIK SARJONI BASRI', category: 'bahasa', cover: '/cover_buku/KAMUS TEKNIK SARJONI BASRI.jpg' },
          { id: 43,title: 'KINEMATICS AND DYNAMICS OF MACHINERY NORTON', category: 'teknik industri', cover: '/cover_buku/KINEMATICS AND DYNAMICS OF MACHINERY NORTON.jpg' },
          { id: 44,title: 'Loyalitas Tanpa Batas  Biografi Marsekal (Purn.) Ashadi Tjahtjadi', category: 'filsafat', cover: '/cover_buku/Loyalitas Tanpa Batas  Biografi Marsekal (Purn.) Ashadi Tjahtjadi.jpg' },
          { id: 46,title: 'Mathematics ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 1 Mathematics', category: 'penerbangan', cover: '/cover_buku/Mathematics ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 1 Mathematics.jpg' },
          { id: 47,title: 'NURTANIO  PERINTIS INDUSTRI PESAWAT TERBANG INDONESIA', category: 'penerbangan', cover: '/cover_buku/NURTANIO  PERINTIS INDUSTRI PESAWAT TERBANG INDONESIA.jpg' },
          { id: 48,title: 'Physics ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 2 Physics', category: 'penerbangan', cover: '/cover_buku/Physics ; IR Part-66 Aircraft Maintenance Licence Distance Learning Modules 2 Physics.jpg' },
          { id: 49,title: 'PILOTS WEIGHT AND BALANCE HANDBOOK', category: 'penerbangan', cover: '/cover_buku/PILOTS WEIGHT AND BALANCE HANDBOOK.jpg' },
          { id: 50,title: 'POMPA SENTRIFUGAL TEORI & DESAIN LUNNY TARDIA', category: 'penerbangan', cover: '/cover_buku/POMPA SENTRIFUGAL TEORI & DESAIN LUNNY TARDIA.jpg' },
          { id: 51,title: 'Production And Operations Management  Focusing on Quality and Competitiveness', category: 'penerbangan', cover: '/cover_buku/Production And Operations Management  Focusing on Quality and Competitiveness.jpg' },
          { id: 52,title: 'POMPA SENTRIFUGAL TEORI & DESAIN LUNNY TARDIA', category: 'penerbangan', cover: '/cover_buku/POMPA SENTRIFUGAL TEORI & DESAIN LUNNY TARDIA.jpg' },
          { id: 53,title: 'Psikologi Pendidikan', category: 'filsafat', cover: '/cover_buku/Psikologi Pendidikan.jpg' },
          { id: 54,title: 'Seoharto & Barisan jenderal orba', category: 'geografi dan sejarah', cover: '/cover_buku/Seoharto & Barisan jenderal orba.jpg' },
          { id: 55,title: 'SUPPLY CHAIN MANAGEMENTTEORI dan APLIKASI', category: 'manajemen', cover: '/cover_buku/SUPPLY CHAIN MANAGEMENTTEORI dan APLIKASI.jpg' },
          { id: 56,title: 'Sustainable Aviation', category: 'penerbangan', cover: '/cover_buku/Sustainable Aviation.jpg' },
          { id: 57,title: 'SYNTHESIS OF SUBSONIC AIRPLANE DESIGN', category: 'penerbangan', cover: '/cover_buku/SYNTHESIS OF SUBSONIC AIRPLANE DESIGN.jpg' },
          { id: 58,title: 'TATA LETAK PABRIK JAMES M APPLE', category: 'teknik industri', cover: '/cover_buku/TATA LETAK PABRIK JAMES M APPLE.jpg' },
          { id: 59,title: 'TEORI DAN APLIKASI TEKNIK ELEKTRONIKA', category: 'elektro', cover: '/cover_buku/TEORI DAN APLIKASI TEKNIK ELEKTRONIKA.jpg' },
          { id: 60,title: 'TEST TECHNIQUES FOR FLIGHT CONTROL SYSTEM OF LARGE TRANSPORT AIRCRAFT  YAKUI GAO', category: 'penerbangan', cover: '/cover_buku/TEST TECHNIQUES FOR FLIGHT CONTROL SYSTEM OF LARGE TRANSPORT AIRCRAFT  YAKUI GAO.jpg' },
          { id: 61,title: 'UNMANNED AIRCRAFT DESIGN', category: 'penerbangan', cover: '/cover_buku/UNMANNED AIRCRAFT DESIGN.jpg' },
          { id: 45,title: 'Marsda TNI Eddy Supriyono, S.E., M.M.  Perjuangan Yang Tak Kenal Menyerah Seorang Teknisi Pesawat TNI AU', category: 'penerbangan', cover: '/cover_buku/Marsda TNI Eddy Supriyono, S.E., M.M.  Perjuangan Yang Tak Kenal Menyerah Seorang Teknisi Pesawat TNI AU.jpg' },
        ]
      };
    },
    computed: {
      filteredBooks() {
        return this.books.filter(book => book.category === this.kategori);
      }
    }
  };
  </script>
  
  <style scoped>
.container {
  padding: 20px;
}

.judul-kategori {
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
}

.grid-buku {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 25px;
  justify-items: center;
  padding: 10px;
}

.buku-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
}

.cover-buku {
  width: auto;
  height: 240px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  border-radius: 8px; /* Sudut melengkung */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Bayangan halus */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transisi lebih halus */
}

.cover-buku:hover {
  transform: scale(1.05); /* Membesar sedikit saat di-hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Bayangan lebih tajam */
}

.judul-buku {
  margin-top: 12px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: center;
}
</style>
