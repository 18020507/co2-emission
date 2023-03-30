<template>
  <div class="container">
    <VSelect :options="options" placeholder="Choose Conversion"/>
    </div>
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

<style scoped>
.container {
  height: 20px;
  justify-content: center;
  margin-top: 20px;
}
</style>

