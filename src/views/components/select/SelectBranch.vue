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
        { label: "009", value: "009" },
        { label: "008", value: "008" },
      ],
    };
  },
});
</script>
    