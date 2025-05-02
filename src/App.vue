<template>
  <navbar/>
  <router-view/>
  <Footer/>
  <ChatbotButton @click="toggleChatbot" />
  <chatbot v-if="isChatbotVisible" :closeChat="toggleChatbot" />


</template>

<script>
import { ref } from 'vue'; // Import ref untuk membuat variabel reaktif
import navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
import ChatbotButton from './components/ChatbotButton.vue';
import chatbot from './components/chatbot.vue';

export default {
  components: {
    navbar,
    Footer,
    ChatbotButton,
    chatbot // Pastikan nama komponen sesuai dengan import Anda
  },
  setup() {
    const isChatbotVisible = ref(false); // State untuk mengontrol visibilitas chatbot

    const toggleChatbot = () => {
      isChatbotVisible.value = !isChatbotVisible.value;
    };

    return {
      isChatbotVisible,
      toggleChatbot
    };
  }
};
</script>

<style>
/* Gaya global aplikasi Anda */
</style>

