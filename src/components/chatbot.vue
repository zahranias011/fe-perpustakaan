<template>
  <div class="chat-window">
    <div class="chat-header">
      <span>📚 Library Chatbot</span>
      <button @click="closeChat">✖</button>
    </div>
    <div class="chat-body" ref="chatBody">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="['chat-message', msg.sender === 'user' ? 'user' : 'bot']"
      >
        {{ msg.text }}
      </div>
    </div>
    <div class="chat-input">
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Tulis pesan..." />
      <button @click="sendMessage">Kirim</button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue'
defineProps(['closeChat'])

const messages = ref([
  { text: 'Halo! Ada yang bisa kami bantu di perpustakaan?', sender: 'bot' }
])

const newMessage = ref('')
const chatBody = ref(null)

function sendMessage() {
  const message = newMessage.value.trim()
  if (!message) return

  // Tambah pesan user
  messages.value.push({ text: message, sender: 'user' })
  const userMessage = message
  newMessage.value = ''

  // Respon otomatis
  setTimeout(() => {
    let reply = 'Maaf, saya belum memahami itu.'

    const msg = userMessage.toLowerCase()

    if (msg.includes('jam buka')) {
      reply = 'Perpustakaan buka setiap Senin–Jumat pukul 08.00–16.00.'
    } else if (msg.includes('lokasi')) {
      reply = 'Perpustakaan terletak di lantai 2 Gedung Utama.'
    } else if (msg.includes('halo') || msg.includes('hi')) {
      reply = 'Halo juga! Ada yang bisa saya bantu? 😊'
    }

    messages.value.push({ text: reply, sender: 'bot' })
  }, 500)
}

// Scroll otomatis ke bawah saat ada pesan baru
watch(messages, () => {
  nextTick(() => {
    chatBody.value.scrollTop = chatBody.value.scrollHeight
  })
})
</script>

<style scoped>
.chat-window {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 300px;
  max-height: 400px;
  background: rgb(3, 3, 3);
  border: 1px solid #d11919;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  overflow: hidden;
  z-index: 1000;
}

.chat-header {
  background: #f5f5f5;
  padding: 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-body {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
}


.chat-message {
  background: #e6f3ff;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 10px;
  font-size: 14px;
  color: black;
  max-width: 80%;
}

.chat-message.user {
  align-self: flex-end;
  background: #d1e7dd;
}

.chat-message.bot {
  align-self: flex-start;
  background: #e6f3ff;
}

.chat-input {
  display: flex;
  border-top: 1px solid #ddd;
}

.chat-input input {
  flex: 1;
  border: none;
  padding: 10px;
  outline: none;
}

.chat-input button {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}
</style>
