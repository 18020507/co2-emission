<template>
  <div class="container-wrap">
    <div class="side-bar">
      <SidebarDataTemplateExplorer />
    </div>
    <div class="content-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SidebarDataTemplateExplorer from "./components/SidebarDataTemplateExplorer.vue";
export default defineComponent({
  components: {
    SidebarDataTemplateExplorer,
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
  width: 18vw;
  background-color: #ffffff;
  border: 1px solid #ececec;
}

.content-view {
  margin: 30px;
  width: 75vw;
}
</style>
