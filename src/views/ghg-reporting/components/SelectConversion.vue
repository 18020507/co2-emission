<template>
  <VSelect :options="options" />
</template>
    
<script>
import { defineComponent } from "vue";
import VSelect from "@/components/VSelect.vue";
export default defineComponent({
  components: { VSelect },
  data() {
    return {
      options: [
        { label: "Conversion 1", value: "conversion1" },
        { label: "Conversion 2", value: "conversion2" },
      ],
    };
  },
});
</script>

