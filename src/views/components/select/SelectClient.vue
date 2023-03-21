<template>
  <VSelect :options="options" placeholder="Client"/>
</template>

<script>
import { defineComponent } from "vue";
import VSelect from "@/components/VSelect.vue";
export default defineComponent({
  components: { VSelect },
  data() {
    return {
      options: [
        { label: "Fleet X", value: "fleetx" },
        { label: "ABC", value: "abc" },
      ],
    };
  },
});
</script>
