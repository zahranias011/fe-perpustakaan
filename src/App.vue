<script>
import navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
import ChatbotButton from './components/ChatbotButton.vue';

export default {
  components: {
    navbar,
    Footer,
    ChatbotButton,
  },
};
</script>

<template>
  <navbar/>
  <router-view/>
  <Footer/>
  <ChatbotButton />
</template>

<style>
</style>
