<template>
  <VSelect :options="options" placeholder="Fuel Source"/>
</template>

<script>
import { defineComponent } from "vue";
import VSelect from "@/components/VSelect.vue";
export default defineComponent({
  components: { VSelect },
  data() {
    return {
      options: [
        { label: "Gas", value: 1 },
        { label: "Diesel", value: 2 },
      ],
    };
  },
});
</script>
