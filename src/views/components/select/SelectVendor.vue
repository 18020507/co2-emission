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
          { label: "Vendor 1", value: "vendor1" },
          { label: "Vendor 2", value: "vendor2" },
        ],
      };
    },
  });
  </script>
  