<template>
    <VSelect :options="options" placeholder="Vehicle"/>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import VSelect from "@/components/VSelect.vue";
  export default defineComponent({
    components: { VSelect },
    data() {
      return {
        options: [
          { label: "755217", value: "744217" },
          { label: "570609", value: "570609" },
        ],
      };
    },
  });
  </script>
  