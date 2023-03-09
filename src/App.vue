<template>
  <div id="app">
    <NavbarComponent />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavbarComponent from "./components/NavBar.vue";
export default {
  name: "app",
  components: { NavbarComponent },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}
</style>
