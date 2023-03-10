<template>
  <div class="container">
    <div class="account-setup-sidebar">
      <SidebarAccountSetup />
    </div>
    <div class="account-setup-content">
      <IndustryServiceForm />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import IndustryServiceForm from "./components/IndustryServiceForm.vue";
import SidebarAccountSetup from "./components/SidebarAccountSetup.vue";

export default defineComponent({
  components: {
    IndustryServiceForm,
    SidebarAccountSetup,
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
}

.account-setup-sidebar {
  height: 100vh;
  width: 18vw;
  border-right: 1px gray solid;
  margin: 0px;
}
.account-setup-content {
  width: 81vw;
}
</style>