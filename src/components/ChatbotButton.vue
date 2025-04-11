<template>
    <button v-if="showButton" id="chatbot-button" @click="openChatbot">
      💬
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showButton: true // Tombol terlihat saat pertama kali
      };
    },
    methods: {
      openChatbot() {
        this.showButton = false; // Sembunyikan tombol saat chatbot dibuka
        this.$router.push('/chatbot');
      },
      showChatbotButton() {
        this.showButton = true; // Munculkan kembali tombol saat chatbot ditutup
      }
    },
    mounted() {
      window.addEventListener("chatbot-closed", this.showChatbotButton);
    },
    beforeUnmount() {
      window.removeEventListener("chatbot-closed", this.showChatbotButton);
    }
  };
  </script>
  
  <style scoped>
  #chatbot-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #007bff;
    color: white;
    border: none;
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  </style>
  