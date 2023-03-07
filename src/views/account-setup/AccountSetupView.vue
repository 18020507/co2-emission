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
    IndustryServiceForm
  },
  data() {
    return {
      sectorOptions: [
        { label: "Energy", value: "energy" },
        { label: "Materials", value: "materials" },
        { label: "Transportation", value: "transportation" },
      ],
    };
  }
});
</script>

<style scoped>
</style>