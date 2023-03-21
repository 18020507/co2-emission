<template>
  <div class="account-setup-content">
    <IndustryServiceForm />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import IndustryServiceForm from "./components/IndustryServiceForm.vue";

export default defineComponent({
  components: {
    IndustryServiceForm,
  },
});
</script>

<style scoped>
</style>
