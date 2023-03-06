<template>
  <VSelect :options="options"/>
</template>

<script>
import { defineComponent } from "vue";
import VSelect from "@/components/VSelect.vue";
export default defineComponent({
  components: { VSelect },
  data() {
    return {
      options: [
        { label: "gas", value: "Gas" },
        { label: "diesel", value: "Diesel" },
      ],
    };
  },
});
</script>
