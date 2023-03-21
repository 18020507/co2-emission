<template>
  <div class="container-wrap">
    <div class="side-bar">
      <SidebarAccountSetup />
    </div>
    <div class="content-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SidebarAccountSetup from "./components/SidebarAccountSetup.vue";

export default defineComponent({
  components: {
    SidebarAccountSetup,
  },
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
  width: 240px;
  background-color: #FFFFFF;
  border: 1px solid #ECECEC;
}

.content-view {
  background-color: #f1f3f5;
  width: calc(100% - 240px);
}
</style>
