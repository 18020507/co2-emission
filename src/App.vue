<template>
  <div id="app">
    <VNavbar />
    <div class="main-content">
      <router-view />
    </div>
    <!-- <LoginView /> -->
  </div>
</template>

<script>
// import LoginView from "./views/login/LoginView.vue";
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
