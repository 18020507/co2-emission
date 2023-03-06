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
          { label: "Facility 1", value: "facility1" },
          { label: "Facility 1", value: "facility2" },
        ],
      };
    },
  });
  </script>
  