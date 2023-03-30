<template>
    <VSelect :options="options" placeholder="Activity Type"/>
  </template>
      
  <script>
  import { defineComponent } from "vue";
  import VSelect from "@/components/VSelect.vue";
  export default defineComponent({
    components: { VSelect },
    data() {
      return {
        options: [
          { label: "Lighting", value: "lighting" },
          { label: "Generators", value: "generator" },
        ],
      };
    },
  });
  </script>
      