<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>

    <Header></Header>

    <router-view></router-view>
  
    <Footer class="absolute bottom-0"></Footer>

</template>

<style scoped>
</style>
