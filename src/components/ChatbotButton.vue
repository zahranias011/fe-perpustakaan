<template>
<div class="chatbot-popup" @click="toggleChat">
      💬
    </div>
</template>
   
 <script setup>
  defineProps(['toggleChat'])
  </script>
  
  <style scoped>
  .chatbot-popup {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: white;
    color: black;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    cursor: pointer;
    font-size: 20px;
    z-index: 999;
  }
  </style>