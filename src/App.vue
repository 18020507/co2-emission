<template>
  <div id="app">
    <VNavbar v-if="this.$route.fullPath != '/login'"/>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import VNavbar from "./components/VNavbar.vue";
export default {
  name: "app",
  components: { VNavbar },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}

.main-content {
  background-color: #f1f3f5;
}

* {
font-family: 'IBM Plex Sans', sans-serif;
}
</style>
