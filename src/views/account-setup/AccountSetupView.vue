<template>
  <div class="container">
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