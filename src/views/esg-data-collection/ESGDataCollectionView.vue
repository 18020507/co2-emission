<template>
  <div class="container-wrap">
    <div class="side-bar">
      <SidebarESGDataCollection />
    </div>
    <div class="content-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SidebarESGDataCollection from "./components/SidebarESGDataCollection.vue";
export default defineComponent({
  components: { SidebarESGDataCollection },
});
</script>

<style scoped>
.container-wrap {
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
}

.side-bar {
  height: 100vh;
  width: 18vw;
  background-color: #FFFFFF;
  border: 1px solid #ECECEC;
}

.content-view {
  margin: 30px;
  width: 75vw;
}
</style>
