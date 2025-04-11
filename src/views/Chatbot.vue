<template>
    <div class="chatbot-container">
      <div class="chatbot-header">
        <h2>📚 Chatbot Perpustakaan</h2>
        <button class="close-btn" @click="closeChatbot">×</button>
      </div>
  
      <div class="chatbot-messages">
        <div v-for="(message, index) in messages" :key="index" :class="message.sender">
          <p>{{ message.text }}</p>
        </div>
      </div>
  
      <div class="chatbot-input">
        <input 
          type="text" 
          v-model="userMessage" 
          placeholder="Tanyakan sesuatu..." 
          @keyup.enter="sendMessage"
        />
        <button @click="sendMessage">📩</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Chatbot',
    data() {
      return {
        userMessage: '',
        messages: [
          { text: 'Halo! Selamat datang di Perpustakaan Digital 📖. Ada yang bisa saya bantu?', sender: 'bot' }
        ]
      };
    },
    methods: {
      sendMessage() {
        if (this.userMessage.trim() !== '') {
          this.messages.push({ text: this.userMessage, sender: 'user' });
          this.userMessage = '';
          setTimeout(() => {
            this.messages.push({ text: 'Terima kasih atas pertanyaannya! 😊', sender: 'bot' });
          }, 1000);
        }
      },
      closeChatbot() {
        this.$router.push('/'); // Kembali ke halaman utama
        window.dispatchEvent(new Event("chatbot-closed")); // Kirim event agar tombol pop-up muncul kembali
      }
    }
  };
  </script>
  
  <style scoped>
  .chatbot-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 320px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
  }
  
  .chatbot-header {
    background: #007bff;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
  
  .chatbot-messages {
    padding: 10px;
    flex-grow: 1;
    overflow-y: auto;
  }
  
  .chatbot-input {
    display: flex;
    border-top: 1px solid #ddd;
  }
  
  .chatbot-input input {
    flex-grow: 1;
    border: none;
    padding: 10px;
  }
  
  .chatbot-input button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  </style>
  