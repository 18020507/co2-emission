<template>
  <div id="app">
    <SidebarComponent />
    <div class="main-content">
      <NavbarComponent />
      <router-view/>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "./components/SideBar.vue";
import NavbarComponent from "./components/NavBar.vue";
export default {
  name: "app",
  components: { SidebarComponent, NavbarComponent },
};
</script>

<style scoped>
#app{
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
}
.main-content{
  width: 80vw;
}
</style>
